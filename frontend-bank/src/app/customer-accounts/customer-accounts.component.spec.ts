import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAccountsComponent } from './customer-accounts.component';
import { MatTableModule } from '@angular/material/table'; // Ajout pour le module de table

describe('CustomerAccountsComponent', () => {
  let component: CustomerAccountsComponent;
  let fixture: ComponentFixture<CustomerAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerAccountsComponent],
      imports: [MatTableModule] // Ajout de MatTableModule pour les tests
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
