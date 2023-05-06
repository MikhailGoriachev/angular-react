import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../../models/task01/Photo";

@Component({
    selector: 'app-photos-table',
    templateUrl: './photos-table.component.html'
})
export class PhotosTableComponent {
    // фото
    @Input() photos: Photo[] | undefined;
}
