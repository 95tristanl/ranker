# ranker
Simple react app that allows people to rank submitted content

4 pages: Home, Submit, Vote, Chart

Home page is a simple entry page with no functionality. 

Can submit content and a user's handle in Submit page.

Can bring up content to vote on in Vote Page. Before you vote it will only show the content. 
After you vote the submitter's handle and the amount of up and down votes will be shown. For
each vote you cast, you can see one more ranked content item in the Chart Page. If the report 
vote reaches 5 votes, the content item (db schema) is deleted from the DB. The Vote Page does not
save state entirely. If you come back to it without leaving the app itself, it will not bring
up content you have already voted on, but previous content you have already voted on will not 
be shown as it was after you had cast your vote.

Chart Page displays 5 most upvoted content items from the DB. As you vote on content in the
Vote Page, the Chart Page will display more content items. 
