import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
dadosAgenda=[
  {
    texto:"prova de Matemática",
    data:"2025-02-08",
    ativo:true
  },

  {
    texto:"Treino de Natação",
    data:"2025-03-22",
    ativo:false
  }
]

  constructor(public toastCtrl:ToastController,public alertController:AlertController) {}

  ativaCompromisso (index:any) {
    let mensagem=' Compromisso ' + this.dadosAgenda[index].texto;
    if(this.dadosAgenda[index].ativo==true) {
      mensagem=mensagem+' ativo';
      this.toastCtrl.create({
        message:mensagem,
        duration:2000,
      })
      .then((toast)=>{
        toast.present();
      });
    }else{
      mensagem=mensagem+' desativado';
      this.toastCtrl.create({
        message:mensagem,
        duration:2000,
      })
      .then((toast)=>{
        toast.present();
      });
    }
  }
  mudar(value:boolean) {
    this.dadosAgenda.forEach((item)=>{
      item.ativo=value;
    })
  }
  public adicionar = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  
  async apagar() {
    const alert = await this.alertController.create({
      header: 'Opa!',
      subHeader: '',
      message: 'Realmente deseja apagar todos os compromissos?',
      buttons: ['Sim','Não'],
    });

    await alert.present();
  }
}
