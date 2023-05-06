import {Injectable} from '@angular/core';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {Student} from "../../models/task01/Student";
import {Utils} from "../../assets/Utils";

@Injectable({
    providedIn: 'root'
})
export class StudentsDbService implements InMemoryWebApiModule {
    createDb() {
        let groupList = ["A", "B", "C"];

        return {
            students: [
                new Student(1, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "rexalint@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(2, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "malyl@outlook.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(3, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "zibllli@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(4, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "fobi@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(5, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "kanali@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(6, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "leryonap@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(7, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "kere@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(8, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "menim@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(9, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "gatcimaks@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList)),
                new Student(10, Utils.getInitials(), new Date(Utils.getInt(1970, 2005), Utils.getInt(1, 12), Utils.getInt(1, 25)), Utils.getPhone(), "miasand@gmail.com", Utils.getRandItem(Utils.levelList), Utils.getRandItem(Utils.coachList), Utils.getRandItem(groupList))
            ]
        };
    }
}
