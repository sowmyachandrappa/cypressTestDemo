node{
    stage('SCM Checkout'){
      git 'https://github.com/sowmyachandrappa/cypressTestDemo'
      }
    stage(Compile-Package){
    bat label: '', script: 'npm run runtests'
    }
    }
