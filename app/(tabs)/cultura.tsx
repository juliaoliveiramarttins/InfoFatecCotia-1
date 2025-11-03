import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { Colors } from '@/constants/Colors';

type CulturalSpotProps = {
  name: string;
  description: string;
  type: string;
  icon: string;
};

function CulturalSpot({ name, description, type, icon }: CulturalSpotProps) {
  return (
    <View style={styles.spotCard}>
      <View style={styles.spotHeader}>
        <View style={styles.spotIconContainer}>
          <Text style={styles.spotIcon}>{icon}</Text>
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
  icon: string;
};

function EventCard({ title, date, location, icon }: EventCardProps) {
  return (
    <View style={styles.eventCard}>
      <View style={styles.eventIconCircle}>
        <Text style={styles.eventIcon}>{icon}</Text>
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventDate}>{date}</Text>
        <Text style={styles.eventLocation}>📍 {location}</Text>
      </View>
    </View>
  );
}

export default function Cultura() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cultura</Text>
        <Text style={styles.headerSubtitle}>
          Eventos culturais, projetos acadêmicos e atividades artísticas
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos Acadêmicos FATEC</Text>
          <EventCard
            title="Semana de Tecnologia"
            date="20-24 de Novembro, 2025"
            location="FATEC Cotia - Auditório"
            icon="💻"
          />
          <EventCard
            title="Mostra Cultural"
            date="5 de Dezembro, 2025"
            location="FATEC Cotia"
            icon="🎨"
          />
          <EventCard
            title="Palestras Tech"
            date="Toda quarta-feira às 19h"
            location="FATEC Cotia - Online"
            icon="🎤"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos e Atividades</Text>
          <CulturalSpot
            name="Atlética FATEC Cotia"
            type="Atividades Contínuas"
            description="Organização de campeonatos e eventos esportivos"
            icon="⚽"
          />
          <CulturalSpot
            name="Clube de Leitura FATEC"
            type="Grupo de Estudos"
            description="Encontros para discussão de livros e literatura"
            icon="📖"
          />
          <CulturalSpot
            name="Eventos da Cantina"
            type="Confraternizações"
            description="Karaokê, rodas de samba e confraternizações"
            icon="🎉"
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cultura em Cotia</Text>
          <CulturalSpot
            name="Biblioteca Municipal"
            type="Biblioteca"
            description="Acervo público com espaço para estudos e pesquisas"
            icon="📚"
          />
          <CulturalSpot
            name="Teatro Municipal"
            type="Teatro"
            description="Apresentações de grupos locais e eventos culturais"
            icon="🎪"
          />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>💡 Participe!</Text>
          <Text style={styles.infoText}>
            Alunos da FATEC podem participar dos projetos culturais e eventos.
            Entre em contato com a coordenação para mais informações.
          </Text>
          <Pressable 
            style={styles.contactButton}
          >
            <Text style={styles.contactButtonText}>📧 Enviar E-mail</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: Colors.fatec.red,
    padding: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.fatec.white,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.fatec.black,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: Colors.fatec.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  eventIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  eventIcon: {
    fontSize: 24,
  },
  eventContent: {
    flex: 1,
    justifyContent: 'center',
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.fatec.black,
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 13,
    color: Colors.fatec.red,
    fontWeight: '600',
    marginBottom: 2,
  },
  eventLocation: {
    fontSize: 12,
    color: '#666',
  },
  spotCard: {
    backgroundColor: Colors.fatec.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  spotHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  spotIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.fatec.red,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  spotIcon: {
    fontSize: 22,
  },
  spotInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  spotType: {
    fontSize: 11,
    color: Colors.fatec.red,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  spotName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.fatec.black,
  },
  spotDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 19,
  },
  infoBox: {
    backgroundColor: '#FFF9E6',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#FFE4A3',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.fatec.black,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: Colors.fatec.red,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  contactButtonText: {
    color: Colors.fatec.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
