/** @jsxImportSource @emotion/react */
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { BrandContainer } from '~/containers/BrandContainer'

type PageProps = {
  brand: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Todo: DBから動的に取得
  const brands = ['brand1', 'brand2', 'brand3']

  return {
    paths: brands.map((brand) => {
      const params: PageProps = { brand }
      return { params }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { brand } = context.params as PageProps
  const props: PageProps = {
    brand,
  }
  return { props }
}

const BrandPage: NextPage<PageProps> = ({ brand }) => {
  return <BrandContainer brand={brand} />
}

export default BrandPage
