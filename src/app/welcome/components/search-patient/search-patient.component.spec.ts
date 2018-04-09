import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { SearchPatientComponent } from './search-patient.component';
import { NgxElectronService } from '../../../ngx-electron/ngx-electron.service';

@Component({
    selector: 'navigation',
    template: ``
})
class MockCardComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() linkText: string;
}

describe('SearchPatientComponent', () => {
    let component: SearchPatientComponent;
    let fixture: ComponentFixture<SearchPatientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchPatientComponent,
                MockCardComponent
            ],
            providers: [
                { provide: NgxElectronService, useValue: {}}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchPatientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
