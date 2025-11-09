//CULTURA
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type CulturalSpotProps = {
  name: string;
  description: string;
  type: string;
  iconName: any;
};

function CulturalSpot({ name, description, type, iconName }: CulturalSpotProps) {
  return (
    <View style={styles.spotCard}>
      <View/>
      <View style={styles.spotHeader}>
        <View style={styles.spotIconContainer}>
          <Ionicons name={iconName} size={24} color="#FFFFFF" />
        </View>
        <View style={styles.spotInfo}>
          <Text style={styles.spotType}>{type}</Text>
          <Text style={styles.spotName}>{name}</Text>
        </View>
      </View>
      <Text style={styles.spotDescription}>{description}</Text>
    </View>
  );
}

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  iconName: any;
};

function EventCard({ title, date, location, iconName }: EventCardProps) {
  return (
    <View style={styles.eventCard}>
      <View/>
      <View style={styles.eventIconCircle}>
        <Ionicons name={iconName} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDate}>{date}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location" size={14} color="#1a68d5ff" />
          <Text style={styles.eventLocation}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

export default function Cultura() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos Acadêmicos FATEC</Text>
          <EventCard
            title="Semana de Tecnologia"
            date="15-19 de Março, 2025"
            location="FATEC Cotia - Auditório"
            iconName="laptop"
          />
          <EventCard
            title="Mostra Cultural"
            date="28 de Abril, 2025"
            location="FATEC Cotia"
            iconName="color-palette"
          />
          <EventCard
            title="Palestras Tech"
            date="Toda quarta-feira às 19h"
            location="FATEC Cotia - Online"
            iconName="mic"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos e Atividades</Text>
          <CulturalSpot
            name="Atlética FATEC Cotia"
            type="Atividades Contínuas"
            description="Organização de campeonatos e eventos esportivos"
            iconName="football"
          />
          <CulturalSpot
            name="Clube de Leitura FATEC"
            type="Grupo de Estudos"
            description="Encontros para discussão de livros e literatura"
            iconName="book"
          />
          <CulturalSpot
            name="Eventos da Cantina"
            type="Confraternizações"
            description="Karaokê, rodas de samba e confraternizações"
            iconName="musical-notes"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultura em Cotia</Text>
          <CulturalSpot
            name="Biblioteca Municipal"
            type="Biblioteca"
            description="Acervo público com espaço para estudos e pesquisas"
            iconName="library"
          />
          <CulturalSpot
            name="Teatro Municipal"
            type="Teatro"
            description="Apresentações de grupos locais e eventos culturais"
            iconName="film"
          />
        </View>

        <View style={styles.infoBox}>
          <View/>
          <View style={styles.infoHeader}>
            <Ionicons name="bulb" size={20} color="#E31E24" />
            <Text style={styles.infoTitle}>Participe!</Text>
          </View>
          <Text style={styles.infoText}>
            Alunos da FATEC podem participar dos projetos culturais e eventos.
            Entre em contato com a coordenação para mais informações.
          </Text>
          <Pressable style={styles.contactButton}>
            <Ionicons name="mail" size={18} color="#FFFFFF" />
            <Text style={styles.contactButtonText}>Enviar E-mail</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  
  eventCard: {
    flexDirection: 'row',
    backgroundColor: 'rgba(64, 64, 64, 0.16)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    elevation: 10,
  },
  eventIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#E31E24',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  eventContent: {
    flex: 1,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '600',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  eventLocation: {
    fontSize: 12,
    color: '#CBD5E1',
  },
  spotCard: {
    backgroundColor: 'rgba(64, 64, 64, 0.16)',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    elevation: 10,
  },
  spotHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  spotIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    elevation: 6,
  },
  spotInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  spotType: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  spotName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  spotDescription: {
    fontSize: 13,
    color: '#CBD5E1',
    lineHeight: 19,
  },
  infoBox: {
    backgroundColor: 'rgba(7, 7, 7, 0.08)',
    borderRadius: 18,
    padding: 20,
    marginTop: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  infoText: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 20,
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: Colors.fatec.red,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    elevation: 6,
  },
  contactButtonText: {
    color: Colors.fatec.white,
    fontSize: 15,
    fontWeight: '600',
  },
});