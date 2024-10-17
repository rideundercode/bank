import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccountsService } from '../services/accounts.service';
import { MatTableDataSource } from '@angular/material/table';
import { AccountDetails, Account } from '../model/account.model';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {
  customerId!: string;
  customer!: Customer;
  accounts: Account[] = [];
  displayedColumns: string[] = ['id', 'customer', 'type', 'creationDate', 'status', 'balance'];
  dataSource!: MatTableDataSource<Account>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute, private router: Router, private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe({
      next: (data: AccountDetails[]) => {
        this.accounts = data.map(accountDetail => ({
          type: accountDetail.accountType,
          id: accountDetail.accountId,
          balance: accountDetail.balance,
          creationDate: accountDetail.accountOperations.length > 0 ? 
              accountDetail.accountOperations[0].operationDate : 'N/A', // Si vous avez besoin d'un message par défaut
          status: accountDetail.accountOperations.length > 0 ? 
              accountDetail.accountOperations[0].operationType : 'N/A', // Ou autre logique
          customerDTO: accountDetail.customerDTO,
        }));

        this.dataSource = new MatTableDataSource<Account>(this.accounts);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      error: error => {
        console.error('Error fetching accounts:', error);
      }
    });
  }
}
