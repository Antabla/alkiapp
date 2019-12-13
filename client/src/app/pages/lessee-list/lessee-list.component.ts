/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d4f828d2e8ab75d05c7281e
*
* You will get 10% discount for each one of your friends
* 
*/
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LesseeService } from '../../services/lessee.service';
// Import Models
import { Lessee } from '../../domain/alkiapp_db/lessee';

// START - USED SERVICES
/**
* LesseeService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* LesseeService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Lessee
 * @class LesseeListComponent
 */
@Component({
    selector: 'app-lessee-list',
    templateUrl: './lessee-list.component.html',
    styleUrls: ['./lessee-list.component.css']
})
export class LesseeListComponent implements OnInit {
    list: Lessee[];
    search: any = {};
    idSelected: string;
    constructor(
        private lesseeService: LesseeService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.lesseeService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Lessee to remove
     *
     * @param {string} id Id of the Lessee to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Lessee
     */
    deleteItem() {
        this.lesseeService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
