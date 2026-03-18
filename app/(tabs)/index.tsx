//professor desde de terça estou passando mau de uma virose mto forte por isso n consegui terminar todo o codigo
// eu acho q abri o arquivo pra fzer o codigo errado? pq o seu na aula estava com a estrutura mto diferente, ia pedir aula hj na aula
//mas estava passando mau de febre, estou entregando msm assim pra pelo menos valer oq eu fiz
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');
export default function App() {
  return (
    <LinearGradient
      colors={['#131416','#131416', '#d51012']}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
  <ScrollView contentContainerStyle={styles.content}>
        <StatusBar style="light" />

  <Image 
  source={require('../../assets/images/pexels-grizzlybear-965875.jpg')}
  style={styles.banner}/>

  <Text style={styles.subtitle}>Introducing myself and my work</Text>
  <Text style={styles.title}>LÍGIA ANDREZA</Text>
  <Text style={styles.subtitle}>de Carvalho Gonser</Text>

  <View style={styles.aboutContainer}>
  <Text style={styles.aboutText}> Sobre mim: {'\n\n'}</Text>
  <Text style={styles.aboutText}>
    Sou uma estudante de Ciência da Computação, atualmente busco constantemente evoluir,
    explorando novas ferramentas, metodologias e linguagens que ampliem minhas habilidades
    técnicas e meu repertório criativo.

    {'\n\n'}

    Além do interesse acadêmico e profissional, valorizo a colaboração e a troca de
    conhecimento. Gosto de ser participativa em iniciativas que promovem obtenção de
    experiência, inclusão e fortalecimento da comunidade tecnológica. Nesse contexto,
    atuo como voluntária na Katie Ufal, um projeto dedicado a incentivar a participação
    feminina na computação por meio de ações de apoio às graduandas de STEM e atividades
    direcionadas a meninas do ensino médio, contribuindo para o desenvolvimento de um
    ambiente mais diverso e equitativo na área.
  </Text>
  </View>
  <Text style={styles.projectsTitle}>Meus Projetos</Text>

<ScrollView
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  style={{ marginTop: 20 }}
>
// sei q o senhor q n era bom colocar link , mas aq eu tinha intenção de fzer assim...
  <View style={styles.card}>
    <Text style={styles.cardTitle}>AppClimaBom</Text>
    <Text style={styles.cardText}>
      O objetivo do sistema é fornecer informações meteorológicas atualizadas e precisas,
      permitindo que os usuários consultem o clima atual, previsões e alertas de forma simples e intuitiva.
    </Text>
  </View>

  <View style={styles.card}>
    <Text style={styles.cardTitle}>Quiz POO</Text>
    <Text style={styles.cardText}>
      Um quiz interativo no console aplicando conceitos de Programação Orientada a Objetos:
      abstração, encapsulamento, herança, polimorfismo e interfaces.
    </Text>
  </View>

  <View style={styles.card}>
    <Text style={styles.cardTitle}>Fila prioritária</Text>
    <Text style={styles.cardText}>
      Sistema que gerencia duas filas de atendimento: uma prioritária e outra normal,
      garantindo organização e atendimento mais justo.
    </Text>
  </View>

</ScrollView>
</ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
// topo
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40
  },

  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10
  },

  subtitle: {
    color: '#dddddd',
    fontSize: 16
  },

  banner: {
    width: '100%',
    height: 200,
    marginBottom: 0,
    marginTop: 20,
  },
// Sobre mim:
  aboutContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },

  aboutText: {
  color: '#ffffff',
  fontSize: 14,
  lineHeight: 20,
  textAlign: 'justify',
},
  aboutProjects: {
  alignItems: 'center',
  marginTop: 20,
  paddingHorizontal: 20,
  color: '#ffffff',
  fontSize: 14,
  textAlign: 'justify',
  },
  projectsTitle: {
  color: '#ffffff',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 30
},

card: {
  width: width - 40,
  marginHorizontal: 20,
  padding: 20,
  backgroundColor: '#5a0000',
  borderRadius: 15
},

cardTitle: {
  color: '#ffffff',
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10
},

cardText: {
  color: '#ffffff',
  fontSize: 14,
  lineHeight: 20,
  textAlign: 'justify'
}
});