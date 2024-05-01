import React from 'react';
import { PDFViewer, Document, Page, View, StyleSheet } from '@react-pdf/renderer';
import ReportTemplate from './ReportTemplate';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

export default function ReportPDF() {
  return (
    <PDFViewer width="100%" height="600px">
        <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <ReportTemplate />
            </View>
        </Page>
        </Document>
    </PDFViewer>
  )
}
