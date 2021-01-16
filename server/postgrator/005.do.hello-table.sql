create table connections(id serial primary key,userID INT,relationID INT,otherUserID INT);

insert into connections(userID,relationID,otherUserID) values(1, 2, 2);
insert into connections(userID,relationID,otherUserID) values(2, 1, 5);
insert into connections(userID,relationID,otherUserID) values(1, 5, 3);
insert into connections(userID,relationID,otherUserID) values(3, 1, 4);
insert into connections(userID,relationID,otherUserID) values(4, 3, 5);







