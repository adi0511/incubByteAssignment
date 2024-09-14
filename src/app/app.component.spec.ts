import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  
  it('should return 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.add("")
    expect(app.sum).toEqual(0)
  });
  it('should return sum', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.add("2,3,4\n2")
    
    expect(app.sum).toEqual(11)
  });
  it('should test negative number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.add("-2,-3,4\n2")
   
    expect(app.messageString).toEqual("-2,-3,")
  });
});
