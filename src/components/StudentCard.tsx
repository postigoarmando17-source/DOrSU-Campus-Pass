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
    <View style={styles.wrapper}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Davao Oriental State University</Text>
        <Text style={styles.bannerSubtitle}>FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY</Text>
        <Text style={styles.bannerTag}>OFFICIAL STUDENT DIGITAL PASS • AY 2026–2027</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.studentRow}>
          <View style={styles.avatarFrame}>
            <Image source={imageSource} style={styles.avatar} />
          </View>

          <View style={styles.info}>
            <Text style={styles.name}>{student.name}</Text>
            <Text style={styles.id}>ID: {student.idNumber}</Text>
            <Text style={styles.meta}>{student.program}</Text>
            <Text style={styles.meta}>{student.yearLevel}</Text>
          </View>
        </View>

        <View style={[styles.statusPill, isActive ? styles.statusPillActive : styles.statusPillInactive]}>
          <View style={[styles.statusDot, isActive ? styles.statusDotActive : styles.statusDotInactive]} />
          <Text style={[styles.statusText, !isActive && styles.statusTextInactive]}>
            {isActive ? 'STATUS: VERIFIED ACTIVE PASS' : 'STATUS: INACTIVE PASS'}
          </Text>
        </View>

        <Text style={styles.campus}>Campus: {student.campus}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    maxWidth: 420,
  },
  banner: {
    backgroundColor: '#0d8097',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 18,
    marginBottom: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  bannerTitle: {
    color: '#f4f9f7',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  bannerSubtitle: {
    color: '#f4f9f7',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 12,
    letterSpacing: 0.8,
  },
  bannerTag: {
    marginTop: 16,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: '#f4f9f7',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  card: {
    width: '100%',
    borderRadius: 22,
    padding: 18,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarFrame: {
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 3,
    borderColor: '#0d8097',
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#dfeadf',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 43,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#123524',
    marginBottom: 8,
  },
  id: {
    fontSize: 16,
    color: '#123524',
    fontWeight: '700',
    marginBottom: 6,
  },
  meta: {
    fontSize: 15,
    color: '#4c6657',
    marginBottom: 2,
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  statusPillActive: {
    backgroundColor: '#d9f2e1',
  },
  statusPillInactive: {
    backgroundColor: '#f6dada',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  statusDotActive: {
    backgroundColor: '#1d8a4d',
  },
  statusDotInactive: {
    backgroundColor: '#b42318',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#123524',
    textAlign: 'center',
  },
  statusTextInactive: {
    color: '#7b1d1a',
  },
  campus: {
    fontSize: 16,
    color: '#567a65',
    textAlign: 'center',
    marginTop: 6,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    display: 'none',
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
});
