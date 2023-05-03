import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProdutosPage } from './create-produtos.page';

describe('CreateProdutosPage', () => {
  let component: CreateProdutosPage;
  let fixture: ComponentFixture<CreateProdutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
