import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members: Member[];
  selectedMember: Member;

  constructor(
    private MemberService: MemberService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MembersComponent: 社員データ(id=${member.id})が選択されました`);
  }

  getMembers(): void {
    this.MemberService.getMembers() // Observable
      .subscribe((members) => (this.members = members));
  }
}
