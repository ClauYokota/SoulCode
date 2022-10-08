import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { async, from, tap } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { User } from 'src/app/models/User';
import{GoogleAuthProvider} from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //criar uma propriedade com a referência da coleção de usuários do FireBase
  private usersCollection = this.store.collection<User>('users')

  constructor(
    private authentication: AngularFireAuth, //serve para manipular parte de autenticação do FireBase
    private store: AngularFirestore, //serve para manipular o banco de dados do firebase
    private router: Router
  ) { }

  get currentUser(){
    //authState retorna o usuário que está logado atualmente na aplicação, se ele existir
    //se não houver nenhum usuário logado, ele retornará nulo
    return this.authentication.authState
  }

  private saveUserData(){
    return tap(async(credentials: firebase.default.auth.UserCredential)=>{
      //recuperar o uid do usuario
      const uid = credentials.user?.uid as string

      //recuperar o email do usuario
      const email = credentials.user?.email as string 

      //SELECT + FROM users WHERE email = email
      const todos: Todo[] = []

      const user = await this.usersCollection.ref.where('email','==', email).get().then(users=>{
        return users.docs[0]
      })

      if (user == undefined){

      

      //criação de um novo documento na coleção de usuários
      //a função doc te retorna a referência para um documento na coleção a partir do seu UID
      //a função set atribui valores ao documento que você está se referenciando
      this.usersCollection.doc(uid).set({
        uid: uid,
        email: email,
        todos: todos
      })

      credentials.user?.sendEmailVerification()
    }
    })
  
  }


  signUpWithEmailAndPassword(email: string, password: string){
    //o from transformará a Promise que o método createUserWithEmailAndPassword retorna em um Observable
    //o método createUserWithEmailAndPassword cadastra um novo usuário no firebase pelo e-mail e senha 
    return from(this.authentication.createUserWithEmailAndPassword(email, password)).pipe(
      this.saveUserData()
    )
    
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return from(this.authentication.signInWithEmailAndPassword(email, password))
  }


  signInWithGoogle(){
    const googleProvider = new GoogleAuthProvider()
    return from(this.authentication.signInWithPopup(googleProvider)).pipe(
      this.saveUserData()
    )
  }



  signOut(){
    return from(this.authentication.signOut()).pipe(
      tap(()=>{
        this.router.navigateByUrl('/auth/login')
      })
    )
  }
}
