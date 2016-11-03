import {Comment} from './comment';
import {User} from './User';

export class Pic {
	public picId: number,
	public picName: string,
	public picTitle : string,
	publicdescription: string,
	public user: User,
	public likedUsers: User[],
	public likedCount: number,
	public comments: Comment[],
	public createdDate: Date;
}
