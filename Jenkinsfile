node{
    stage('SCM Checkout'){
      git https://github.com/sowmyachandrappa/cypressTestDemo''
      }
    stage(Compile-Package){
   sh label: '', script: 'npm run runtests'
    }
    }
