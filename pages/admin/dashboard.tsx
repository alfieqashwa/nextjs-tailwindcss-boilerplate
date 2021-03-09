import React from "react";
import Link from 'next/link'

// components

import Layout from '../../Layouts/administrator'
import Testcard from '../../components/Cards/testCard'



// layout for page



export default function Dashboard() {
  return (
    <>
        <Layout>
          <Testcard/>
        </Layout>
    </>
  );
}

Dashboard.layout = Layout;