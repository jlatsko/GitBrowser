import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material';
import { MatDividerModule} from '@angular/material';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatGridListModule, MatDividerModule, FormsModule, HttpClientTestingModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
