node{
    stage('SCM Checkout'){
      git 'https://github.com/sowmyachandrappa/cypressTestDemo'
      }
    stage(Compile-Package){
    sh 'npm run runtests'
    }
    }
