import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }),
      (fixture = TestBed.createComponent(AppComponent));
    app = fixture.componentInstance;
  });

  it('should create the AppComponent', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Test App'`, () => {
    expect(app.title).toEqual('Angular Test App');
  });
});
