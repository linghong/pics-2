import {User} from './user';
import {Pic} from './pic';

export class Comment {
	public commentId: number,
	public commentOwner: User,
	public commentToPic: Pic,
	public commentContent: string
}