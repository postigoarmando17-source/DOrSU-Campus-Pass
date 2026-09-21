import { Pressable, StyleSheet, Text, View } from 'react-native';

type ScanCounterProps = {
  count: number;
  onScan: () => void;
  onReset: () => void;
};

export default function ScanCounter({ count, onScan, onReset }: ScanCounterProps) {
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

const styles = StyleSheet.create({
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
});
