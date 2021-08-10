## Installation

Installation requirements : nodejs [https://nodejs.org/en/], Xcode, Read through https://reactnative.dev/docs/environment-setup and install accordingly.

1. Run `git clone https://github.com/Annamaneni7/CodingForGoodProject.git`
2. `npm install`
3. `cd ios && pod install` (iOS)
4. `pod update'

5. Follow https://reactnative.dev/docs/running-on-device to run it on your ios/android device.

NOTE: If attempting to run on your IOS device using Xcode, there are high chances you might run into errors. If the error is something on the lines of "name not available", you need to rename the whole project. I highly recommend renaming the entire project to something unique before you attempt to run this on your IOS device.

Here are the steps to rename the entire project folder:

1. Close Xcode.

2. Go to your /ProjectFolder.

3. cd /Path/to/your/NewProjectFolder
4. Install Homebrew https://brew.sh/ [if you dont already have it]
5. brew install rename ack
6. 
   find . -name 'oldName*' -print0 | xargs -0 rename --subst-all 'oldName' 'NewProject'
    
   This step renames the files and directories containing the source string. You’ll need to run this command twice, because directories will be renamed first, then files and directories inside those will be renamed on the next iteration.

  
7. To Check if all the files containing the source string are renamed, run the command below. You should see empty output.

  find . -name 'oldName*'

8. ack --literal --files-with-matches 'oldName' --print0 | xargs -0 sed -i '' 's/oldName/NewProject/g'

Check if all occurrences of the string in all files were replaced. You should see empty output.

 9. ack --literal 'oldName'
10. cd ios && pod install

You are done!

