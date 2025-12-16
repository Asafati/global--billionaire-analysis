import React from "react";
import Layout from "../components/Layout"; // Memanggil Layout
import { motion } from "framer-motion";
import { Rocket, Building2, Scale, TrendingUp, Brain } from "lucide-react";

/* ======================
   KOMPONEN UI SEDERHANA
====================== */

const Card = ({ children }) => (
  <div className="bg-white dark:bg-neutral-900 border rounded-xl shadow-md p-4">
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

const Badge = ({ children }) => (
  <span className="px-3 py-1 text-xs rounded-full border border-gray-300 dark:border-neutral-600">
    {children}
  </span>
);

const Separator = () => (
  <div className="my-8 border-t border-gray-200 dark:border-neutral-700" />
);

/* ======================
   KOMPONEN SECTION
====================== */

const Section = ({ title, subtitle, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    {subtitle && (
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {subtitle}
      </p>
    )}
    {children}
  </motion.section>
);

/* ======================
   KARTU PROFIL
====================== */

const ProfileCard = ({ icon: Icon, name, role, points }) => (
  <Card>
    <CardContent>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-gray-100 dark:bg-neutral-700">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

/* ======================
   HALAMAN UTAMA
====================== */

const Reports = () => {
  return (
    <Layout>
    <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
          Laporan Strategis Tokoh Publik
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Analisis profesional berbasis data publik terhadap tokoh global,
          nasional, dan regional.
        </p>

        {/* RINGKASAN EKSEKUTIF */}
        <Section title="Ringkasan Eksekutif">
          <Card>
            <CardContent>
              <p>
                Laporan ini mengkaji tiga figur dengan skala pengaruh berbeda:
                <b> Elon Musk</b> (global – teknologi),
                <b> Prajogo Pangestu</b> (nasional – industri & energi), dan
                <b> Marinus Gea</b> (legislatif – kebijakan publik).
                Ketiganya merepresentasikan pendekatan kepemimpinan, inovasi,
                serta dampak sosial-ekonomi yang berbeda namun saling melengkapi.
              </p>
            </CardContent>
          </Card>
        </Section>

        {/* PROFIL TOKOH */}
        <Section title="Profil Utama Tokoh">
          <div className="grid md:grid-cols-3 gap-6">
            <ProfileCard
              icon={Rocket}
              name="Elon Musk"
              role="Pemimpin Teknologi Global"
              points={[
                "CEO Tesla dan SpaceX",
                "Pelopor kendaraan listrik dan eksplorasi Mars",
                "Berpengaruh besar dalam AI, energi, dan media digital",
              ]}
            />
            <ProfileCard
              icon={Building2}
              name="Prajogo Pangestu"
              role="Konglomerat Industri Indonesia"
              points={[
                "Pendiri Barito Pacific Group",
                "Fokus pada petrokimia dan energi panas bumi",
                "Orang terkaya di Indonesia (2024–2025)",
              ]}
            />
            <ProfileCard
              icon={Scale}
              name="Marinus Gea"
              role="Anggota DPR RI"
              points={[
                "Legislator tiga periode (PDI Perjuangan)",
                "Fokus pada hukum, UMKM, dan perlindungan korban",
                "Tokoh nasional asal Kepulauan Nias",
              ]}
            />
          </div>
        </Section>

        {/* LINIMASA */}
        <Section title="Linimasa Dampak">
          <Card>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold">Elon Musk</h4>
                <p>1995–2002: Startup & PayPal</p>
                <p>2002–2015: SpaceX & Tesla</p>
                <p>2016–2025: AI, Neuralink, X</p>
              </div>

              <div>
                <h4 className="font-semibold">Prajogo Pangestu</h4>
                <p>1980–1999: Industri dasar</p>
                <p>2000–2015: Petrokimia nasional</p>
                <p>2016–2025: Energi terbarukan</p>
              </div>

              <div>
                <h4 className="font-semibold">Marinus Gea</h4>
                <p>2000–2013: Dunia usaha</p>
                <p>2014–2019: DPR RI periode pertama</p>
                <p>2020–2025: Legislasi dan advokasi</p>
              </div>
            </CardContent>
          </Card>
        </Section>

        {/* ANALISIS */}
        <Section title="Analisis Strategis">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent>
                <h4 className="font-semibold flex items-center gap-2">
                  <Brain size={16} /> Pola Kepemimpinan
                </h4>
                <p>
                  Elon Musk menonjol melalui inovasi disruptif, Prajogo Pangestu
                  melalui konsolidasi industri dan efisiensi modal, sementara
                  Marinus Gea berperan dalam stabilitas kebijakan dan
                  representasi publik.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h4 className="font-semibold flex items-center gap-2">
                  <TrendingUp size={16} /> Dampak Sosial dan Ekonomi
                </h4>
                <p>
                  Ketiganya menciptakan nilai berkelanjutan, mulai dari
                  kapitalisasi pasar global, investasi nasional, hingga
                  perlindungan masyarakat melalui regulasi.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Separator />

        {/* KESIMPULAN */}
        <Section title="Kesimpulan">
          <Card>
            <CardContent>
              <p>
                Laporan ini menunjukkan bahwa kepemimpinan yang efektif tidak
                selalu berasal dari satu sektor. Inovasi, industri, dan
                kebijakan publik saling melengkapi dalam membentuk masa depan
                ekonomi dan sosial.
              </p>

              <div className="mt-4 flex gap-2 flex-wrap">
                <Badge>Data Publik</Badge>
                <Badge>Analisis Strategis</Badge>
                <Badge>Laporan Profesional</Badge>
              </div>
            </CardContent>
          </Card>
        </Section>
      </motion.div>
    </main>
    </Layout>
  );
};

export default Reports;
