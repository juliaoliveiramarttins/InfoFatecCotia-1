import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  color?: string;
};

function CategoryCard({ title, description, href, icon, color }: CategoryCardProps) {
  const cardColor = color || Colors.fatec.red;
  
  return (
    <Link href={href as any} asChild>
      <Pressable 
        style={({ pressed }) => [
          styles.card,
          pressed && styles.cardPressed
        ]}
      >
        <View style={styles.cardTop}>
          <View style={[styles.iconCircle, { backgroundColor: cardColor }]}>
            <Text style={styles.iconText}>{icon}</Text>
          </View>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.arrowIcon}>›</Text>
          </View>
        </View>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {description}
        </Text>
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Info Fatec Cotia</Text>
          <Text style={styles.headerSubtitle}>Guia de informações sobre a faculdade e a cidade</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Explore</Text>
          
          <View style={styles.cardsContainer}>
            <CategoryCard
              title="Cultura"
              description="Arte, eventos e patrimônio cultural da região"
              href="/cultura"
              icon="🎨"
              color="#E31E24"
            />
            <CategoryCard
              title="Educação"
              description="Informações acadêmicas e recursos de ensino"
              href="/educacao"
              icon="📖"
              color="#C62828"
            />
            <CategoryCard
              title="Empregos"
              description="Oportunidades de carreira e mercado de trabalho"
              href="/empregos"
              icon="💼"
              color="#1A1A1A"
            />
            <CategoryCard
              title="Segurança"
              description="Orientações e contatos de emergência"
              href="/seguranca"
              icon="🚨"
              color="#B71C1C"
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>FATEC Cotia</Text>
          <Text style={styles.footerYear}>2025</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: Colors.fatec.red,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.fatec.white,
    marginBottom: 8,
    letterSpacing: -1,
  },
  headerSubtitle: {
    fontSize: 15,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '400',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  locationText: {
    fontSize: 13,
    color: Colors.fatec.white,
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.fatec.black,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  cardsContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: Colors.fatec.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  cardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 22,
  },
  cardTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: Colors.fatec.black,
    letterSpacing: -0.3,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
    paddingLeft: 56,
  },
  arrowContainer: {
    marginLeft: 8,
  },
  arrowIcon: {
    fontSize: 24,
    color: '#CCC',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.fatec.black,
    letterSpacing: 1,
  },
  footerYear: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
});