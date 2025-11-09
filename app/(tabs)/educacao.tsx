//EDUCACAO
import { View, Text, StyleSheet, ScrollView, Pressable, Linking } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type CourseCardProps = {
    name: string;
    period: string;
    iconName: any;
    color: string;
};

function CourseCard({ name, period, iconName, color }: CourseCardProps) {
    return (
        <View style={styles.courseCard}>
            <View />
            <View style={styles.courseContent}>
                <View style={[styles.courseIconContainer, { backgroundColor: color }]}>
                    <Ionicons name={iconName} size={24} color="#FFFFFF" />
                </View>

                <View style={styles.courseInfo}>
                    <Text style={styles.courseName}>{name}</Text>
                    <View style={styles.periodContainer}>
                        <Ionicons name="time-outline" size={14} color="#94A3B8" />
                        <Text style={styles.coursePeriod}>{period}</Text>
                    </View>
                </View>

                <View style={styles.arrowContainer}>
                    <Ionicons name="chevron-forward" size={24} color="rgba(255, 255, 255, 0.4)" />
                </View>
            </View>
        </View>
    );
}

type InfoCardProps = {
    title: string;
    description: string;
    iconName: any;
};

function InfoCard({ title, description, iconName }: InfoCardProps) {
    return (
        <View style={styles.infoCard}>
            <View />
            <View style={styles.infoCardHeader}>
                <View style={styles.infoIconContainer}>
                    <Ionicons name={iconName} size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.infoCardTitle}>{title}</Text>
            </View>
            <Text style={styles.infoCardDescription}>{description}</Text>
        </View>
    );
}

export default function Educacao() {
    const openWebsite = async (url: string) => {
        try {
            const canOpen = await Linking.canOpenURL(url);
            if (canOpen) {
                await Linking.openURL(url);
            }
        } catch (error) {
            console.error('Erro ao abrir URL:', error);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cursos Tecnológicos</Text>
                    <Text style={styles.sectionSubtitle}>
                        A FATEC Cotia oferece seis cursos superiores gratuitos de tecnologia
                    </Text>

                    <CourseCard
                        name="Ciência de Dados"
                        period="Período Noturno"
                        iconName="analytics"
                        color="#8B5CF6"
                    />
                    <CourseCard
                        name="Comércio Exterior"
                        period="Período Matutino"
                        iconName="globe"
                        color="#06B6D4"
                    />
                    <CourseCard
                        name="Desenvolvimento de Software Multiplataforma"
                        period="Período Noturno"
                        iconName="code-slash"
                        color="#2563EB"
                    />
                    <CourseCard
                        name="Design de Produto"
                        period="Período Matutino"
                        iconName="color-palette"
                        color="#EC4899"
                    />
                    <CourseCard
                        name="Gestão da Produção Industrial"
                        period="Matutino ou Noturno"
                        iconName="settings"
                        color="#F59E0B"
                    />
                    <CourseCard
                        name="Gestão Empresarial"
                        period="Matutino ou Noturno"
                        iconName="briefcase"
                        color="#10B981"
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Vantagens</Text>

                    <InfoCard
                        title="100% Gratuito"
                        description="Todos os cursos são totalmente gratuitos, sem mensalidades"
                        iconName="checkmark-circle"
                    />
                    <InfoCard
                        title="Diploma Reconhecido"
                        description="Diploma de nível superior reconhecido pelo MEC"
                        iconName="school"
                    />
                    <InfoCard
                        title="Infraestrutura Moderna"
                        description="Laboratórios equipados e estrutura de qualidade"
                        iconName="hardware-chip"
                    />
                </View>

                <View style={styles.highlightBox}>
                    <View style={styles.highlightGlow} />
                    <View style={styles.highlightHeader}>
                        <Ionicons name="information-circle" size={24} color="#E31E24" />
                        <Text style={styles.highlightTitle}>Como Ingressar</Text>
                    </View>
                    <Text style={styles.highlightText}>
                        O ingresso na FATEC Cotia é feito através do Vestibular, realizado semestralmente.
                        As inscrições geralmente ocorrem em maio (2º semestre) e outubro (1º semestre).
                    </Text>
                    <Pressable style={styles.actionButton} onPress={() => openWebsite('https://vestibular.fatec.sp.gov.br/home/')}>
                        <Ionicons name="link" size={18} color="#FFFFFF" />
                        <Text style={styles.actionButtonText}>Acessar Site Oficial</Text>
                    </Pressable>
                </View>

                <View style={[styles.section, { marginTop: 24 }]}>
                    <Text style={styles.sectionTitle}>Educação em Cotia</Text>
                    <Text style={styles.sectionSubtitle}>
                        Conheça as opções de educação técnica e infantil disponíveis na cidade
                    </Text>

                    <View style={styles.etecCard}>
                        <View />
                        <View style={styles.etecHeader}>
                            <View style={styles.etecIconContainer}>
                                <Ionicons name="school" size={28} color="#FFFFFF" />
                            </View>
                            <Text style={styles.etecTitle}>ETEC Cotia</Text>
                        </View>

                        <Text style={styles.etecDescription}>
                            Escola Técnica Estadual mantida pelo Governo do Estado de São Paulo,
                            oferecendo cursos técnicos e de Ensino Médio gratuitos com habilitação profissional.
                        </Text>

                        <View style={styles.coursesSection}>
                            <Text style={styles.coursesTitle}>Ensino Médio com Habilitação</Text>
                            <View style={styles.courseItem}>
                                <Ionicons name="chevron-forward-circle" size={18} color="#06B6D4" />
                                <Text style={styles.courseItemText}>Técnico em Administração (manhã)</Text>
                            </View>
                            <View style={styles.courseItem}>
                                <Ionicons name="chevron-forward-circle" size={18} color="#8B5CF6" />
                                <Text style={styles.courseItemText}>Técnico em Desenvolvimento de Sistemas (tarde)</Text>
                            </View>
                        </View>

                        <View style={styles.coursesSection}>
                            <Text style={styles.coursesTitle}>Ensino Técnico</Text>
                            <View style={styles.courseItem}>
                                <Ionicons name="chevron-forward-circle" size={18} color="#10B981" />
                                <Text style={styles.courseItemText}>Administração (noite)</Text>
                            </View>
                            <View style={styles.courseItem}>
                                <Ionicons name="chevron-forward-circle" size={18} color="#F59E0B" />
                                <Text style={styles.courseItemText}>Contabilidade (noite)</Text>
                            </View>
                        </View>

                        <View style={styles.infoBox}>
                            <Ionicons name="information-circle-outline" size={20} color="#94A3B8" />
                            <Text style={styles.infoBoxText}>
                                Inscrições pelo site oficial do Vestibulinho Etec
                            </Text>
                        </View>

                        <Pressable style={styles.secondaryButton} onPress={() => openWebsite('https://vestibulinho.etec.sp.gov.br/home/')}>
                            <Ionicons name="link" size={18} color="#FFFFFF" />
                            <Text style={styles.secondaryButtonText}>Acessar Site da ETEC</Text>
                        </Pressable>
                    </View>

                    <View style={styles.infantilCard}>
                        <View />
                        <View style={styles.infantilHeader}>
                            <View style={styles.infantilIconContainer}>
                                <Ionicons name="happy" size={28} color="#FFFFFF" />
                            </View>
                            <Text style={styles.infantilTitle}>Educação Infantil</Text>
                        </View>

                        <Text style={styles.infantilDescription}>
                            A Secretaria de Educação de Cotia oferece vagas para Educação Infantil
                            na rede municipal de ensino.
                        </Text>

                        <View style={styles.infantilInfo}>
                            <View style={styles.infantilItem}>
                                <Ionicons name="calendar" size={18} color="#EC4899" />
                                <View style={styles.infantilItemText}>
                                    <Text style={styles.infantilItemTitle}>Inscrições Abertas</Text>
                                    <Text style={styles.infantilItemDesc}>Até 28 de fevereiro de 2025</Text>
                                </View>
                            </View>

                            <View style={styles.infantilItem}>
                                <Ionicons name="grid" size={18} color="#8B5CF6" />
                                <View style={styles.infantilItemText}>
                                    <Text style={styles.infantilItemTitle}>Níveis Disponíveis</Text>
                                    <Text style={styles.infantilItemDesc}>Berçário, Maternal I e II, Jardim I e II</Text>
                                </View>
                            </View>

                            <View style={styles.infoBox}>
                                <Ionicons name="information-circle-outline" size={20} color="#94A3B8" />
                                <Text style={styles.infoBoxText}>
                                    Inscrições pelo site oficial da Prefeitura de Cotia
                                </Text>
                            </View>
                        </View>

                        <Pressable style={styles.secondaryButton} onPress={() => openWebsite('https://cotiaportal.gier.com.br/')}>
                            <Ionicons name="link" size={18} color="#FFFFFF" />
                            <Text style={styles.secondaryButtonText}>Acessar Portal da Prefeitura</Text>
                        </Pressable>
                    </View>
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
        marginBottom: 8,
        letterSpacing: -0.5,
    },
    sectionSubtitle: {
        fontSize: 14,
        color: '#94A3B8',
        marginBottom: 16,
        lineHeight: 20,
    },

    courseCard: {
        backgroundColor: 'rgba(64, 64, 64, 0.16)',
        borderRadius: 18,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        elevation: 10,
    },
    courseContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    courseIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
        elevation: 6,
    },
    courseInfo: {
        flex: 1,
    },
    courseName: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 4,
        lineHeight: 20,
    },
    periodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    coursePeriod: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    arrowContainer: {
        marginLeft: 8,
    },
    infoCard: {
        backgroundColor: 'rgba(64, 64, 64, 0.16)',
        borderRadius: 18,
        padding: 18,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        elevation: 10,
    },
    infoCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoIconContainer: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: '#2563EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        elevation: 4,
    },
    infoCardTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    infoCardDescription: {
        fontSize: 14,
        color: '#CBD5E1',
        lineHeight: 20,
    },
    highlightBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
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
    highlightGlow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    highlightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 12,
    },
    highlightTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    highlightText: {
        fontSize: 14,
        color: '#CBD5E1',
        lineHeight: 22,
        marginBottom: 16,
    },
    actionButton: {
        backgroundColor: '#E31E24',
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        elevation: 6,
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
    etecCard: {
        backgroundColor: 'rgba(64, 64, 64, 0.16)',
        borderRadius: 18,
        padding: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        elevation: 10,
    },
    etecHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    etecIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#2563EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        elevation: 6,
    },
    etecTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    etecDescription: {
        fontSize: 14,
        color: '#CBD5E1',
        lineHeight: 20,
        marginBottom: 16,
    },
    coursesSection: {
        marginBottom: 16,
    },
    coursesTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    courseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    courseItemText: {
        fontSize: 14,
        color: '#E2E8F0',
        flex: 1,
    },
    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: 12,
        borderRadius: 12,
        marginTop: 4,
    },
    infoBoxText: {
        fontSize: 13,
        color: '#94A3B8',
        flex: 1,
    },
    infantilCard: {
        backgroundColor: 'rgba(64, 64, 64, 0.16)',
        borderRadius: 18,
        padding: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        overflow: 'hidden',
        elevation: 10,
    },
    infantilHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infantilIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#EC4899',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
    },
    infantilTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
    },
    infantilDescription: {
        fontSize: 14,
        color: '#CBD5E1',
        lineHeight: 20,
        marginBottom: 16,
    },
    infantilInfo: {
        gap: 12,
    },
    infantilItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        padding: 14,
        borderRadius: 12,
    },
    infantilItemText: {
        flex: 1,
    },
    infantilItemTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 2,
    },
    infantilItemDesc: {
        fontSize: 13,
        color: '#94A3B8',
        lineHeight: 18,
    },
    secondaryButton: {
        backgroundColor: '#2563EB',
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginTop: 12,
        elevation: 6,
    },
    secondaryButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
    },
});