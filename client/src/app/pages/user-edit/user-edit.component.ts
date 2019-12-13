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
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { UserService } from '../../services/user.service';
// Import Models
import { User } from '../../domain/alkiapp_db/user';

// START - USED SERVICES
/**
* UserService.create
*	@description CRUD ACTION create
*
* UserService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UserService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a User
 */
@Component({
    selector: 'app-user-edit',
    templateUrl: 'user-edit.component.html',
    styleUrls: ['user-edit.component.css']
})
export class UserEditComponent implements OnInit {
    item: User;
    model: User;
    formValid: Boolean;

    constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new User();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.userService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save User
     *
     * @param {boolean} formValid Form validity check
     * @param User item User to save
     */
    save(formValid: boolean, item: User): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.userService.update(item).subscribe(data => this.goBack());
            } else {
                this.userService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



