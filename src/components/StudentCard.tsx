import { Image, StyleSheet, Text, View } from 'react-native';

import { StatusBadgeProps, StudentProfile } from '../types/student';

export interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, isActive ? styles.badgeActive : styles.badgeInactive]}>
      <Text style={styles.badgeText}>{isActive ? 'Active' : 'Inactive'}</Text>
    </View>
  );
}

export default function StudentCard({ student, isActive }: StudentCardProps) {
  const imageSource = typeof student.avatarUrl === 'string' ? { uri: student.avatarUrl } : student.avatarUrl;

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>DOrSU{'\n'}Digital Campus Pass</Text>
        <StatusBadge isActive={isActive} />
      </View>

      <View style={styles.studentRow}>
        <Image source={imageSource} style={styles.avatar} />

        <View style={styles.info}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.meta}>{student.program}</Text>
          <Text style={styles.meta}>{student.yearLevel}</Text>
          <Text style={styles.id}>ID: {student.idNumber}</Text>
          <Text style={styles.campus}>{student.campus}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#123524',
    lineHeight: 33,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  badgeActive: {
    backgroundColor: '#dff7e8',
  },
  badgeInactive: {
    backgroundColor: '#fde5e5',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#123524',
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 14,
    marginRight: 16,
    backgroundColor: '#dfeadf',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#123524',
    marginBottom: 6,
  },
  meta: {
    fontSize: 15,
    color: '#4c6657',
    marginBottom: 2,
  },
  id: {
    fontSize: 15,
    color: '#2d7a4f',
    fontWeight: '600',
    marginTop: 6,
  },
  campus: {
    fontSize: 14,
    color: '#567a65',
    marginTop: 4,
  },
});
