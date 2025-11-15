import { View, Text, StyleSheet, ScrollView, Pressable, Linking, Modal } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

type CourseInfo = {
    name: string;
    period: string;
    iconName: any;
    color: string;
    description: string;
    duration: string;
    subjects: string[];
    career: string[];
};

type CourseCardProps = {
    courseInfo: CourseInfo;
    onPress: () => void;
};

function CourseCard({ courseInfo, onPress }: CourseCardProps) {
    return (
        <Pressable style={styles.courseCard} onPress={onPress}>
            <View style={styles.courseContent}>
                <View style={[styles.courseIconContainer, { backgroundColor: courseInfo.color }]}>
                    <Ionicons name={courseInfo.iconName} size={24} color="#FFFFFF" />
                </View>

                <View style={styles.courseInfo}>
                    <Text style={styles.courseName}>{courseInfo.name}</Text>
                    <View style={styles.periodContainer}>
                        <Ionicons name="time-outline" size={14} color="#94A3B8" />
                        <Text style={styles.coursePeriod}>{courseInfo.period}</Text>
                    </View>
                </View>

                <View style={styles.arrowContainer}>
                    <Ionicons name="chevron-forward" size={24} color="rgba(255, 255, 255, 0.4)" />
                </View>
            </View>
        </Pressable>
    );
}

type CourseModalProps = {
    visible: boolean;
    courseInfo: CourseInfo | null;
    onClose: () => void;
};

function CourseModal({ visible, courseInfo, onClose }: CourseModalProps) {
    if (!courseInfo) return null;

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <Pressable 
                    style={StyleSheet.absoluteFill} 
                    onPress={onClose}
                />
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <View style={[styles.modalIconContainer, { backgroundColor: courseInfo.color }]}>
                            <Ionicons name={courseInfo.iconName} size={28} color="#FFFFFF" />
                        </View>
                        <Pressable style={styles.closeButton} onPress={onClose}>
                            <Ionicons name="close" size={24} color="#FFFFFF" />
                        </Pressable>
                    </View>

                    <Text style={styles.modalTitle}>{courseInfo.name}</Text>
                    
                    <View style={styles.modalPeriodBadge}>
                        <Ionicons name="time-outline" size={16} color="#94A3B8" />
                        <Text style={styles.modalPeriod}>{courseInfo.period}</Text>
                    </View>

                    <ScrollView 
                        showsVerticalScrollIndicator={true}
                        nestedScrollEnabled={true}
                    >
                        <View style={styles.modalSection}>
                            <Text style={styles.modalSectionTitle}>Sobre o Curso</Text>
                            <Text style={styles.modalDescription}>{courseInfo.description}</Text>
                        </View>

                        <View style={styles.modalSection}>
                            <Text style={styles.modalSectionTitle}>Duração</Text>
                            <View style={styles.modalInfoBox}>
                                <Ionicons name="calendar-outline" size={18} color="#2563EB" />
                                <Text style={styles.modalInfoText}>{courseInfo.duration}</Text>
                            </View>
                        </View>

                        <View style={styles.modalSection}>
                            <Text style={styles.modalSectionTitle}>Principais Matérias</Text>
                            {courseInfo.subjects.map((item, index) => (
                                <View key={index} style={styles.subjectItem}>
                                    <Ionicons name="book-outline" size={18} color={courseInfo.color} />
                                    <Text style={styles.subjectText}>{item}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={[styles.modalSection, { marginBottom: 0 }]}>
                            <Text style={styles.modalSectionTitle}>Áreas de Atuação</Text>
                            {courseInfo.career.map((item, index) => (
                                <View key={index} style={styles.careerItem}>
                                    <Ionicons name="checkmark-circle" size={18} color={courseInfo.color} />
                                    <Text style={styles.careerText}>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
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
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<CourseInfo | null>(null);

    const courses: CourseInfo[] = [
        {
            name: "Ciência de Dados",
            period: "Período Noturno",
            iconName: "analytics",
            color: "#8B5CF6",
            description: "Forma profissionais capacitados para coletar, processar, analisar e interpretar grandes volumes de dados, utilizando técnicas de estatística, machine learning e visualização de dados para apoiar decisões estratégicas.",
            duration: "6 semestres (3 anos)",
            subjects: [
                "Estatística e Probabilidade",
                "Python para Análise de Dados",
                "Machine Learning",
                "Big Data e NoSQL",
                "Visualização de Dados",
                "Business Intelligence"
            ],
            career: [
                "Cientista de Dados",
                "Analista de Big Data",
                "Engenheiro de Machine Learning",
                "Analista de Business Intelligence",
                "Consultor de Analytics"
            ]
        },
        {
            name: "Comércio Exterior",
            period: "Período Matutino",
            iconName: "globe",
            color: "#06B6D4",
            description: "Capacita profissionais para atuar em operações de importação e exportação, logística internacional, negociação comercial, análise de mercados globais e gestão de cadeias de suprimentos internacionais.",
            duration: "6 semestres (3 anos)",
            subjects: [
                "Legislação Aduaneira",
                "Logística Internacional",
                "Marketing Internacional",
                "Operações Cambiais",
                "Gestão de Supply Chain",
                "Negociação Internacional"
            ],
            career: [
                "Analista de Comércio Exterior",
                "Coordenador de Importação/Exportação",
                "Consultor em Logística Internacional",
                "Despachante Aduaneiro",
                "Trading Manager"
            ]
        },
        {
            name: "Desenvolvimento de Software Multiplataforma",
            period: "Período Noturno",
            iconName: "code-slash",
            color: "#2563EB",
            description: "Prepara desenvolvedores para criar aplicações que funcionam em múltiplas plataformas (web, mobile, desktop), utilizando linguagens modernas, frameworks atuais e metodologias ágeis de desenvolvimento.",
            duration: "6 semestres (3 anos)",
            subjects: [
                "Programação Web (HTML, CSS, JavaScript)",
                "React e React Native",
                "Banco de Dados (SQL e NoSQL)",
                "Desenvolvimento Mobile",
                "APIs e Microserviços",
                "Metodologias Ágeis (Scrum)"
            ],
            career: [
                "Desenvolvedor Full Stack",
                "Desenvolvedor Mobile",
                "Desenvolvedor Front-End/Back-End",
                "Engenheiro de Software",
                "Arquiteto de Soluções"
            ]
        },
        {
            name: "Design de Produto",
            period: "Período Matutino",
            iconName: "color-palette",
            color: "#EC4899",
            description: "Forma profissionais capazes de criar e desenvolver produtos considerando aspectos estéticos, funcionais, ergonômicos e de sustentabilidade, desde a concepção até a produção industrial.",
            duration: "6 semestres (3 anos)",
            subjects: [
                "Desenho Técnico e CAD",
                "Materiais e Processos Produtivos",
                "Ergonomia e Design Universal",
                "Modelagem 3D",
                "Design Thinking",
                "Prototipagem Rápida"
            ],
            career: [
                "Designer de Produto",
                "Designer Industrial",
                "Consultor em Design Thinking",
                "Gerente de Desenvolvimento de Produtos",
                "Designer de Experiência do Usuário (UX)"
            ]
        },
        {
            name: "Gestão da Produção Industrial",
            period: "Matutino ou Noturno",
            iconName: "settings",
            color: "#F59E0B",
            description: "Capacita gestores para planejar, organizar e controlar processos produtivos industriais, otimizando recursos, qualidade, custos e prazos através de técnicas modernas de gestão.",
            duration: "6 semestres (3 anos)",
            subjects: [
                "Planejamento e Controle da Produção (PCP)",
                "Gestão da Qualidade",
                "Lean Manufacturing",
                "Logística Industrial",
                "Automação Industrial",
                "Gestão de Custos"
            ],
            career: [
                "Supervisor de Produção",
                "Gestor de Processos Industriais",
                "Analista de PCP",
                "Coordenador de Qualidade",
                "Consultor em Lean Manufacturing"
            ]
        },
        {
            name: "Gestão Empresarial",
            period: "Matutino ou Noturno",
            iconName: "briefcase",
            color: "#10B981",
            description: "Forma gestores preparados para administrar empresas de diferentes portes e segmentos, desenvolvendo competências em planejamento estratégico, finanças, marketing, recursos humanos e empreendedorismo.",
            duration: "6 semestres (3 anos)",
            subjects: [
                "Administração Geral",
                "Gestão Financeira",
                "Marketing e Vendas",
                "Gestão de Pessoas",
                "Planejamento Estratégico",
                "Empreendedorismo e Inovação"
            ],
            career: [
                "Gestor Empresarial",
                "Analista Administrativo",
                "Consultor de Negócios",
                "Empreendedor",
                "Coordenador de Recursos Humanos"
            ]
        }
    ];

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

    const handleCoursePress = (course: CourseInfo) => {
        setSelectedCourse(course);
        setModalVisible(true);
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cursos Tecnológicos</Text>
                    <Text style={styles.sectionSubtitle}>
                        A FATEC Cotia oferece seis cursos superiores gratuitos de tecnologia. Toque em cada curso para mais informações.
                    </Text>

                    {courses.map((course, index) => (
                        <CourseCard
                            key={index}
                            courseInfo={course}
                            onPress={() => handleCoursePress(course)}
                        />
                    ))}
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

            <CourseModal
                visible={modalVisible}
                courseInfo={selectedCourse}
                onClose={() => setModalVisible(false)}
            />
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
    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
},
    modalContent: {
    backgroundColor: '#1A1A1A',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxHeight: '85%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
},
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    modalIconContainer: {
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 12,
        lineHeight: 28,
    },
    modalPeriodBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        alignSelf: 'flex-start',
        marginBottom: 16,
    },
    modalPeriod: {
        fontSize: 13,
        color: '#94A3B8',
        fontWeight: '600',
    },
    
    modalSection: {
        marginBottom: 20,
    },
    modalSectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 14,
        color: '#CBD5E1',
        lineHeight: 22,
    },
    modalInfoBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: 'rgba(37, 99, 235, 0.15)',
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(37, 99, 235, 0.3)',
    },
    modalInfoText: {
        fontSize: 14,
        color: '#E2E8F0',
        fontWeight: '600',
        flex: 1,
    },
    subjectItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
        paddingLeft: 4,
    },
    subjectText: {
        fontSize: 14,
        color: '#E2E8F0',
        flex: 1,
    },
    careerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
        paddingLeft: 4,
    },
    careerText: {
        fontSize: 14,
        color: '#E2E8F0',
        flex: 1,
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
