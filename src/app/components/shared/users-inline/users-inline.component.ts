import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { combineLatest, Observable } from "rxjs";
import { User } from "../../../../api";
import { UsersCacheService } from "../../../services";

@Component({
  selector: 'ksi-users-inline',
  templateUrl: './users-inline.component.html',
  styleUrls: ['./users-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersInlineComponent implements OnInit {
  @Input()
  users: number[];

  @Input()
  showRoles = false;

  users$: Observable<User[]>;

  constructor(private usersCache: UsersCacheService) { }

  ngOnInit(): void {
    this.users$ = combineLatest(
      this.users.map((userId) => this.usersCache.getUser(userId))
    );
  }

}