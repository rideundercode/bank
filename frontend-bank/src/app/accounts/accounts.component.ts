import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { catchError, Observable, throwError } from 'rxjs';
import { AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountFormGroup!: FormGroup;
  operationFormGroup!: FormGroup; // Correction du nom de la variable ici
  currentPage = 0;
  pageSize = 5;
  accountObservable!: Observable<AccountDetails>;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private accountService: AccountsService) {}

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: ['']
    });
    this.operationFormGroup = this.fb.group({ // Correction du nom de la variable ici
      operationType: [null],
      amount: [0],
      description: [null],
      accountDestination: [null]
    });
  }

  handleSearchAccount(): void {
    const accountId: string = this.accountFormGroup.value.accountId;
    this.accountObservable = this.accountService.getAccount(accountId, this.currentPage, this.pageSize).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  gotoPage(page: number): void {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation(): void {
    const accountId: string = this.accountFormGroup.value.accountId;
    const operationType = this.operationFormGroup.value.operationType;
    const amount: number = this.operationFormGroup.value.amount;
    const description: string = this.operationFormGroup.value.description;
    const accountDestination: string = this.operationFormGroup.value.accountDestination;

    switch (operationType) {
      case 'DEBIT':
        this.accountService.debit(accountId, amount, description).subscribe({
          next: () => {
            alert('Success Debit');
            this.operationFormGroup.reset();
            this.handleSearchAccount();
          },
          error: err => console.log(err)
        });
        break;
      case 'CREDIT':
        this.accountService.credit(accountId, amount, description).subscribe({
          next: () => {
            alert('Success Credit');
            this.operationFormGroup.reset();
            this.handleSearchAccount();
          },
          error: err => console.log(err)
        });
        break;
      case 'TRANSFER':
        this.accountService.transfer(accountId, accountDestination, amount).subscribe({
          next: () => {
            alert('Success Transfer');
            this.operationFormGroup.reset();
            this.handleSearchAccount();
          },
          error: err => console.log(err)
        });
        break;
      default:
        console.error('Invalid operation type');
    }
  }
}
