//INICIO
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  iconName: any;
  color: string;
};

function CategoryCard({ title, description, href, iconName, color }: CategoryCardProps) {
  return (
    <Link href={href as any} asChild>
      <Pressable 
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed
        ]}
      >
        {/* Gradiente de brilho no topo */}
        <View style={styles.cardGlow} />
        
        <View style={styles.cardContent}>
          <View style={[styles.iconContainer, { backgroundColor: color }]}>
            <Ionicons name={iconName} size={24} color="#FFFFFF" />
          </View>
          
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription} numberOfLines={2}>
              {description}
            </Text>
          </View>

          <View style={styles.arrowContainer}>
            <Ionicons name="chevron-forward" size={24} color="rgba(255, 255, 255, 0.4)" />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
            <Text style={styles.welcomeSubtitle}>
              Explore tudo sobre a FATEC Cotia e a cidade.
            </Text>
          </View>

          {/* Cards Grid */}
          <View style={styles.cardsContainer}>
            <CategoryCard
              title="Cultura"
              description="Arte, eventos e patrimônio cultural da região"
              href="/cultura"
              iconName="color-palette"
              color="#9333EA"
            />
            <CategoryCard
              title="Educação"
              description="Informações acadêmicas e recursos de ensino"
              href="/educacao"
              iconName="book"
              color="#2563EB"
            />
            <CategoryCard
              title="Empregos"
              description="Oportunidades de carreira e mercado de trabalho"
              href="/empregos"
              iconName="briefcase"
              color="#059669"
            />
            <CategoryCard
              title="Segurança"
              description="Orientações e contatos de emergência"
              href="/seguranca"
              iconName="shield-checkmark"
              color="#DC2626"
            />
          </View>

          {/* Stats Section */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="people" size={20} color="#E31E24" style={styles.statIcon} />
              <Text style={styles.statNumber}>300+</Text>
              <Text style={styles.statLabel}>Alunos</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="calendar" size={20} color="#E31E24" style={styles.statIcon} />
              <Text style={styles.statNumber}>10+</Text>
              <Text style={styles.statLabel}>Eventos/ano</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="ribbon" size={20} color="#E31E24" style={styles.statIcon} />
              <Text style={styles.statNumber}>100%</Text>
              <Text style={styles.statLabel}>Gratuito</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
    paddingTop: 24,
  },
  welcomeSection: {
    marginBottom: 25,
    marginTop: 5,

  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#94A3B8',
    lineHeight: 24,
  },
  cardsContainer: {
    gap: 5,
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(119, 119, 119, 0.3)',
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 4,
    letterSpacing: -0.2,
  },
  cardDescription: {
    fontSize: 14,
    color: '#CBD5E1',
    lineHeight: 20,
  },
  arrowContainer: {
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 14,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  statIcon: {
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  
});