#!/bin/bash

#커밋 메시지를 입력받기
read -p "Enter your commit message: " commit_message

#Git 명령어 실행
cd C:\react_invitation
git add .
git commit -m "$commit_message"
git push origin master

#auto push 사용 방법
#$ ./push.sh
#Enter your commit message: [커밋 메시지 입력]
#END
#OR
#$ pushpush
#Enter your commit message: [커밋 메시지 입력]
#END
#"pushpush" terminal 입력 시 자동으로 D\CTS_code로 이동 후 github에 push함.