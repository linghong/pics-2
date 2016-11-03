import {User} from './user';

export class Pic {
	public picId: number,
	public picName: string,
	public picTitle : string,
	public picDescription: string,
	public picOwner: User,
	public likeUsers: User[],
	public likeCount: number,
	public createdDate: Date;
}