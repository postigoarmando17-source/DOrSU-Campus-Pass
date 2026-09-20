import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import StudentCard from '../components/StudentCard';
import { StudentProfile } from '../types/student';

const student: StudentProfile = {
  name: 'Armando Bona',
  idNumber: '2023-0844',
  program: 'Bachelor of Science in Information Technology',
  yearLevel: '3rd Year - 3F',
  avatarUrl: require('../../assets/images/studentone.png'),
  campus: 'DOrSU Main Campus',
};

const peerStudent: StudentProfile = {
  name: 'JHON RAVEN C. RUBIO',
  idNumber: '2024-0126',
  program: 'BS in Information Technology',
  yearLevel: '3rd Year - 3F',
  avatarUrl: require('../../assets/images/studenttwo.png'),
  campus: 'DOrSU Main Campus',
};

function ScanCounter({
  count,
  onScan,
  onReset,
}: {
  count: number;
  onScan: () => void;
  onReset: () => void;
}) {
  return (
    <View style={styles.counterCard}>
      <Text style={styles.counterTitle}>Today's Gate Entries: {count}</Text>

      <Pressable style={styles.primaryButton} onPress={onScan}>
        <Text style={styles.buttonText}>+1 Scan at Gate</Text>
      </Pressable>

      <Pressable style={styles.secondaryButton} onPress={onReset}>
        <Text style={styles.secondaryButtonText}>Reset Scans</Text>
      </Pressable>
    </View>
  );
}

export default function HomeScreen() {
  const [gateScans, setGateScans] = useState(0);
  const [isSuspended, setIsSuspended] = useState(false);

  const handleScan = () => {
    setGateScans((prev) => prev + 1);
  };

  const handleReset = () => {
    setGateScans(0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <StudentCard student={student} isActive={!isSuspended} />
          <ScanCounter count={gateScans} onScan={handleScan} onReset={handleReset} />

          <Pressable
            style={styles.suspensionButton}
            onPress={() => setIsSuspended((previous) => !previous)}
          >
            <Text style={styles.suspensionButtonText}>
              {isSuspended ? 'Restore Active Pass' : 'Simulate Pass Suspension'}
            </Text>
          </Pressable>

          <View style={styles.divider} />

          <View style={styles.peerSection}>
            <Text style={styles.peerTitle}>PEER PROPS DEMO:</Text>
            <StudentCard student={peerStudent} isActive={true} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#edf6ef',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#edf6ef',
  },
  counterCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  counterTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: '#123524',
    textAlign: 'center',
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: '#1b6b3a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#dfeadf',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#123524',
    fontSize: 16,
    fontWeight: '700',
  },
  suspensionButton: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#b42318',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  suspensionButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  divider: {
    width: '100%',
    maxWidth: 420,
    height: 1,
    backgroundColor: '#b8c7bb',
    marginVertical: 4,
  },
  peerSection: {
    width: '100%',
    maxWidth: 420,
    gap: 10,
  },
  peerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#006b82',
  },
});
