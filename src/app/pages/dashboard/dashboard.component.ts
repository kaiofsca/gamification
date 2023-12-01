import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AwardModalComponent } from '../../components/award-modal/award-modal.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, MatIconModule, MenuBarComponent, MatDialogModule ]
})
export class DashboardComponent {
  awards = [
    {
      icon: 'sentiment_satisfied_alt',
      name: 'Aluno excelente!',
      description: 'Parabéns! Você tirou SS em todas as matérias e participou de muitos eventos neste semestre!',
      points: '2000',
      coins: '50',
    },
    {
      icon: 'beenhere',
      name: 'MESTRE DO PAPIRO',
      description: 'Mestre do Papiro é um título prestigioso concedido aos alunos que demonstraram excelência acadêmica e conhecimento em todas as disciplinas.',
      points: '3000',
      coins: '75',
    },
    {
      icon: 'mood',
      name: 'Um dos alunos com menos faltas do mês!',
      description: 'Parabéns! Sua dedicação e presença constante nas aulas são dignas de reconhecimento.',
      points: '1500',
      coins: '40',
    },
    {
      icon: 'whatshot',
      name: 'SS em mais de 4 provas neste semestre!',
      description: 'Incrível! Conseguir a pontuação máxima (SS) em mais de 4 provas é um feito notável. Continue assim!',
      points: '2500',
      coins: '60',
    },
    {
      icon: 'wb_incandescent',
      name: 'Conclusão antecipada!',
      description: 'Parabéns por concluir suas tarefas antes do prazo! Sua eficiência é realmente impressionante.',
      points: '1800',
      coins: '45',
    },
    {
      icon: 'flag',
      name: 'Aluno destaque em participação!',
      description: 'Seu envolvimento ativo nas atividades da escola é inspirador. Continue contribuindo positivamente!',
      points: '1600',
      coins: '40',
    },
    {
      icon: 'pie_chart',
      name: 'Melhor desempenho em projetos!',
      description: 'Seu trabalho excepcional nos projetos escolares se destacou. Continue brilhando!',
      points: '2200',
      coins: '55',
    },
    {
      icon: 'looks_3',
      name: 'Top 3 nas avaliações!',
      description: 'Estar entre os três melhores em avaliações é uma conquista notável. Continue focado nos estudos!',
      points: '2400',
      coins: '60',
    },
  ];
  

  constructor(private dialog: MatDialog) {}

  openAwardModal(award: any): void {
    this.dialog.open(AwardModalComponent, {
      data: award,
    });
  }
}
