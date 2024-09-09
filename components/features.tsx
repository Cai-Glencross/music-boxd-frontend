export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Here are some albums you can review! Please do so!</h2>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://i.scdn.co/image/ab67616d00001e025076e4160d018e378f488c33"
                   alt="Taylor Swift's Tortured Poet's department"/>
              <h4 className="h4 mb-2">The Tortured Poet's Department</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://i.scdn.co/image/ab67616d0000b273fd8d7a8d96871e791cb1f626"
                   alt="Sabrina Carpenter's Short n' Sweet"/>
              <h4 className="h4 mb-2">Short n' Sweet</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://i.scdn.co/image/ab67616d0000b27388e3822cccfb8f2832c70c2e"
                   alt="Charli XCX's Brat"/>
              <h4 className="h4 mb-2">BRAT</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad"
                   alt="Kendrick Lamar's Not Like Us"/>
              <h4 className="h4 mb-2">Not Like Us</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>


            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://i.scdn.co/image/ab67616d0000b273e17e51543be87943285b65ad"
                   alt="Post Malone's F-1 Trillion"/>
              <h4 className="h4 mb-2">F-1 Trillion</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://i.scdn.co/image/ab67616d0000b27335d777c5fa4a353b87ad62bd"
                   alt="$uicideboy$' New World Depression"/>
              <h4 className="h4 mb-2">New World Depression</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
