if error while uploading on github occurs-> git add .
warning: in the working copy of 'backend/package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'backend/package.json', LF will be replaced by CRLF the next time Git touches it

do the following 

git config --global core.autocrlf true
