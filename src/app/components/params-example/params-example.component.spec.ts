import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ParamsExampleComponent } from './params-example.component';

describe('ParamsExampleComponent', () => {
  let component: ParamsExampleComponent;
  let fixture: ComponentFixture<ParamsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParamsExampleComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: Router, useValue: {} },
      ],
      imports: [RouterModule],
    });
    fixture = TestBed.createComponent(ParamsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
