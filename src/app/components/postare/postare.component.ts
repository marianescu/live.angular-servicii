import { Component, Input } from "@angular/core";

@Component({
    selector:"app-postare",
    standalone: true,
    templateUrl: "./postare.component.html",
    styleUrl: "./postare.component.css"
})
export class PostareComponent{
    @Input() titlu:string=""
    @Input() subtitlu:string=""
    @Input() info:string=""
}