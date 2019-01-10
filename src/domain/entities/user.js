export class User {
  constructor(handle, username, bio, location, website, birthday,id){
    this.id = id;
    this.handle = handle;
    this.username = username;
    this.bio = bio;
    this.location = location;
    this.website = website;
    this.birhday = birthday;
    if (!this.id){
      throw Error ('User must have an id')
    }
  }
}