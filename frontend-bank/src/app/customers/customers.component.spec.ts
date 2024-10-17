import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomersComponent } from './customers.component';
import { MatTableModule } from '@angular/material/table'; // Ajout de MatTableModule pour les tests
import { MatPaginatorModule } from '@angular/material/paginator'; // Ajout de MatPaginatorModule
import { MatSortModule } from '@angular/material/sort'; // Ajout de MatSortModule

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersComponent],
      imports: [MatTableModule, MatPaginatorModule, MatSortModule] // Ajout des modules nécessaires
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
