import Accordion from './Accordion'


const Faq = () => {
  return (
    <section className="min-h-[9rem] mt-32 mb-5">
      <h1 className="text-center mb-11 text-3xl font-[Bellota] font-bold">
        Frequently Asked Question
      </h1>
      <div className="px-60 mx-auto px-3 max-mf:px-3">
        <Accordion question={"What is Dapp Stars NFT?"}>
          Dapp Stars NFT is a decentralized application (dapp) that allows users
          to create and mint non-fungible tokens (NFTs). NFTs are unique digital
          assets that can represent ownership of anything from artwork and
          collectibles to in-game items and virtual real estate.
        </Accordion>
        <Accordion question={"How do I use Dapp Stars NFT?"}>
          To use Dapp Stars NFT, you will need to have a digital wallet that
          supports Ethereum, the blockchain platform on which Dapp Stars NFT is
          built. You can then access the dapp through your web browser or a
          mobile app and follow the prompts to create and mint your own NFTs.
        </Accordion>
        <Accordion question={"What are the fees for using Dapp Stars NFT?"}>
          The fees for using Dapp Stars NFT will vary depending on the
          complexity of the NFT you are creating and the current demand for gas
          (the fee paid to execute a transaction on the Ethereum blockchain).
          You will need to have enough Ethereum in your digital wallet to cover
          the cost of the transaction.
        </Accordion>
        <Accordion question={"Can I customize my NFTs on Dapp Stars NFT?"}>
          Yes, Dapp Stars NFT allows you to customize your NFTs by adding
          metadata and media files to the token. The metadata can include
          information about the NFT, such as its name, description, and any
          other relevant details. The media files can be images, audio, or video
          that represent the NFT. You can also use smart contracts to set rules
          and conditions for your NFTs, such as specifying who can access or use
          them.
        </Accordion>
      </div>
    </section>
  );
}

export default Faq
