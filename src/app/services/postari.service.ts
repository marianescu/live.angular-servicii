import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class PostariService{
    obtinePostari(){
        return [
            {
                "titlu":"Abc",
                "autor":"Marian",
                "data":"04/09/2024"
            }
        ]
    }
}