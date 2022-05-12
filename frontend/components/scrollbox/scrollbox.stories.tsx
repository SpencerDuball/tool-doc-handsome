import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Scrollbox } from "components/scrollbox/scrollbox";

export default {
  title: "Components/Scrollbox",
  component: Scrollbox,
} as ComponentMeta<typeof Scrollbox>;

export const VerticalScroll: ComponentStory<typeof Scrollbox> = (args) => (
  <Scrollbox height="400px" width="300px" {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur
    purus ut. Urna cursus eget nunc scelerisque. Purus sit amet luctus venenatis
    lectus. Magna eget est lorem ipsum dolor sit amet consectetur. Erat velit
    scelerisque in dictum non. Sit amet commodo nulla facilisi nullam vehicula.
    Tincidunt nunc pulvinar sapien et ligula ullamcorper. Curabitur vitae nunc
    sed velit dignissim sodales. In egestas erat imperdiet sed euismod nisi
    porta lorem mollis. Sollicitudin ac orci phasellus egestas tellus. Tellus in
    hac habitasse platea dictumst vestibulum rhoncus. Consectetur adipiscing
    elit duis tristique sollicitudin nibh sit amet. Purus in massa tempor nec
    feugiat. Sed euismod nisi porta lorem. Nulla pharetra diam sit amet. Et
    malesuada fames ac turpis egestas integer. Augue neque gravida in fermentum
    et. Imperdiet proin fermentum leo vel. Sagittis orci a scelerisque purus. At
    elementum eu facilisis sed odio morbi quis commodo odio. Sit amet tellus
    cras adipiscing enim eu turpis egestas. A iaculis at erat pellentesque. Quam
    elementum pulvinar etiam non quam lacus suspendisse faucibus. At ultrices mi
    tempus imperdiet nulla. Velit euismod in pellentesque massa. Aliquam
    eleifend mi in nulla. Blandit volutpat maecenas volutpat blandit aliquam
    etiam erat velit. Volutpat diam ut venenatis tellus in metus vulputate eu.
    Amet risus nullam eget felis eget. Eget gravida cum sociis natoque penatibus
    et magnis dis. Phasellus egestas tellus rutrum tellus pellentesque eu. Hac
    habitasse platea dictumst vestibulum rhoncus est pellentesque elit
    ullamcorper. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed
    augue lacus viverra vitae congue eu. Purus gravida quis blandit turpis
    cursus in hac. Malesuada fames ac turpis egestas sed. Arcu non odio euismod
    lacinia. Diam donec adipiscing tristique risus nec feugiat in fermentum
    posuere. Mattis rhoncus urna neque viverra justo nec. Elementum facilisis
    leo vel fringilla est ullamcorper eget nulla. Id venenatis a condimentum
    vitae sapien pellentesque habitant. Non arcu risus quis varius. Donec et
    odio pellentesque diam volutpat. Libero justo laoreet sit amet. Amet massa
    vitae tortor condimentum. Amet nisl purus in mollis nunc. Integer feugiat
    scelerisque varius morbi enim. Auctor eu augue ut lectus arcu bibendum.
    Metus vulputate eu scelerisque felis imperdiet proin. Enim facilisis gravida
    neque convallis a cras semper auctor neque. Sed vulputate mi sit amet mauris
    commodo quis. Arcu non sodales neque sodales ut etiam sit. Ut tristique et
    egestas quis ipsum suspendisse ultrices gravida. Mi proin sed libero enim
    sed faucibus turpis in. Risus ultricies tristique nulla aliquet. Etiam sit
    amet nisl purus in. Nisl pretium fusce id velit ut tortor pretium viverra.
    Fames ac turpis egestas integer eget aliquet nibh praesent. Ut enim blandit
    volutpat maecenas volutpat blandit aliquam. Semper viverra nam libero justo
    laoreet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum
    fusce. Sit amet aliquam id diam maecenas ultricies mi. Nisl nunc mi ipsum
    faucibus. Leo duis ut diam quam nulla porttitor massa. Velit aliquet
    sagittis id consectetur purus ut faucibus pulvinar. Quis imperdiet massa
    tincidunt nunc. Laoreet non curabitur gravida arcu. Viverra nam libero justo
    laoreet. Metus vulputate eu scelerisque felis imperdiet proin fermentum.
    Bibendum est ultricies integer quis auctor. Ullamcorper morbi tincidunt
    ornare massa eget egestas purus viverra. Magnis dis parturient montes
    nascetur ridiculus mus mauris.
  </Scrollbox>
);

export const HorizontalScroll: ComponentStory<typeof Scrollbox> = (args) => (
  <Scrollbox height="300px" width="400px" {...args}>
    Very
    looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
    lineeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  </Scrollbox>
);

export const Both: ComponentStory<typeof Scrollbox> = (args) => (
  <Scrollbox height="400px" width="300px" {...args}>
    looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong
    lineeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Sagittis id consectetur
    purus ut. Urna cursus eget nunc scelerisque. Purus sit amet luctus venenatis
    lectus. Magna eget est lorem ipsum dolor sit amet consectetur. Erat velit
    scelerisque in dictum non. Sit amet commodo nulla facilisi nullam vehicula.
    Tincidunt nunc pulvinar sapien et ligula ullamcorper. Curabitur vitae nunc
    sed velit dignissim sodales. In egestas erat imperdiet sed euismod nisi
    porta lorem mollis. Sollicitudin ac orci phasellus egestas tellus. Tellus in
    hac habitasse platea dictumst vestibulum rhoncus. Consectetur adipiscing
    elit duis tristique sollicitudin nibh sit amet. Purus in massa tempor nec
    feugiat. Sed euismod nisi porta lorem. Nulla pharetra diam sit amet. Et
    malesuada fames ac turpis egestas integer. Augue neque gravida in fermentum
    et. Imperdiet proin fermentum leo vel. Sagittis orci a scelerisque purus. At
    elementum eu facilisis sed odio morbi quis commodo odio. Sit amet tellus
    cras adipiscing enim eu turpis egestas. A iaculis at erat pellentesque. Quam
    elementum pulvinar etiam non quam lacus suspendisse faucibus. At ultrices mi
    tempus imperdiet nulla. Velit euismod in pellentesque massa. Aliquam
    eleifend mi in nulla. Blandit volutpat maecenas volutpat blandit aliquam
    etiam erat velit. Volutpat diam ut venenatis tellus in metus vulputate eu.
    Amet risus nullam eget felis eget. Eget gravida cum sociis natoque penatibus
    et magnis dis. Phasellus egestas tellus rutrum tellus pellentesque eu. Hac
    habitasse platea dictumst vestibulum rhoncus est pellentesque elit
    ullamcorper. Aliquet sagittis id consectetur purus ut faucibus. Nunc sed
    augue lacus viverra vitae congue eu. Purus gravida quis blandit turpis
    cursus in hac. Malesuada fames ac turpis egestas sed. Arcu non odio euismod
    lacinia. Diam donec adipiscing tristique risus nec feugiat in fermentum
    posuere. Mattis rhoncus urna neque viverra justo nec. Elementum facilisis
    leo vel fringilla est ullamcorper eget nulla. Id venenatis a condimentum
    vitae sapien pellentesque habitant. Non arcu risus quis varius. Donec et
    odio pellentesque diam volutpat. Libero justo laoreet sit amet. Amet massa
    vitae tortor condimentum. Amet nisl purus in mollis nunc. Integer feugiat
    scelerisque varius morbi enim. Auctor eu augue ut lectus arcu bibendum.
    Metus vulputate eu scelerisque felis imperdiet proin. Enim facilisis gravida
    neque convallis a cras semper auctor neque. Sed vulputate mi sit amet mauris
    commodo quis. Arcu non sodales neque sodales ut etiam sit. Ut tristique et
    egestas quis ipsum suspendisse ultrices gravida. Mi proin sed libero enim
    sed faucibus turpis in. Risus ultricies tristique nulla aliquet. Etiam sit
    amet nisl purus in. Nisl pretium fusce id velit ut tortor pretium viverra.
    Fames ac turpis egestas integer eget aliquet nibh praesent. Ut enim blandit
    volutpat maecenas volutpat blandit aliquam. Semper viverra nam libero justo
    laoreet. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum
    fusce. Sit amet aliquam id diam maecenas ultricies mi. Nisl nunc mi ipsum
    faucibus. Leo duis ut diam quam nulla porttitor massa. Velit aliquet
    sagittis id consectetur purus ut faucibus pulvinar. Quis imperdiet massa
    tincidunt nunc. Laoreet non curabitur gravida arcu. Viverra nam libero justo
    laoreet. Metus vulputate eu scelerisque felis imperdiet proin fermentum.
    Bibendum est ultricies integer quis auctor. Ullamcorper morbi tincidunt
    ornare massa eget egestas purus viverra. Magnis dis parturient montes
    nascetur ridiculus mus mauris. et. Imperdiet proin fermentum leo vel.
    Sagittis orci a scelerisque purus. At elementum eu facilisis sed odio morbi
    quis commodo odio. Sit amet tellus cras adipiscing enim eu turpis egestas. A
    iaculis at erat pellentesque. Quam elementum pulvinar etiam non quam lacus
    suspendisse faucibus. At ultrices mi tempus imperdiet nulla. Velit euismod
    in pellentesque massa. Aliquam eleifend mi in nulla. Blandit volutpat
    maecenas volutpat blandit aliquam etiam erat velit. Volutpat diam ut
    venenatis tellus in metus vulputate eu. Amet risus nullam eget felis eget.
    Eget gravida cum sociis natoque penatibus et magnis dis. Phasellus egestas
    tellus rutrum tellus pellentesque eu. Hac habitasse platea dictumst
    vestibulum rhoncus est pellentesque elit ullamcorper. Aliquet sagittis id
    consectetur purus ut faucibus. Nunc sed augue lacus viverra vitae congue eu.
    Purus gravida quis blandit turpis cursus in hac. Malesuada fames ac turpis
    egestas sed. Arcu non odio euismod lacinia. Diam donec adipiscing tristique
    risus nec feugiat in fermentum posuere. Mattis rhoncus urna neque viverra
    justo nec. Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
    Id venenatis a condimentum vitae sapien pellentesque habitant. Non arcu
    risus quis varius. Donec et odio pellentesque diam volutpat. Libero justo
    laoreet sit amet. Amet massa vitae tortor condimentum. Amet nisl purus in
    mollis nunc. Integer feugiat scelerisque varius morbi enim. Auctor eu augue
    ut lectus arcu bibendum. Metus vulputate eu scelerisque felis imperdiet
    proin. Enim facilisis gravida neque convallis a cras semper auctor neque.
    Sed vulputate mi sit amet mauris commodo quis. Arcu non sodales neque
    sodales ut etiam sit. Ut tristique et egestas quis ipsum suspendisse
    ultrices gravida. Mi proin sed libero enim sed faucibus turpis in. Risus
    ultricies tristique nulla aliquet. Etiam sit amet nisl purus in. Nisl
    pretium fusce id velit ut tortor pretium viverra. Fames ac turpis egestas
    integer eget aliquet nibh praesent. Ut enim blandit volutpat maecenas
    volutpat blandit aliquam. Semper viverra nam libero justo laoreet. Tristique
    et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Sit amet
    aliquam id diam maecenas ultricies mi. Nisl nunc mi ipsum faucibus. Leo duis
    ut diam quam nulla porttitor massa. Velit aliquet sagittis id consectetur
    purus ut faucibus pulvinar. Quis imperdiet massa tincidunt nunc. Laoreet non
    curabitur gravida arcu. Viverra nam libero justo laoreet. Metus vulputate eu
    scelerisque felis imperdiet proin fermentum. Bibendum est ultricies integer
    quis auctor. Ullamcorper morbi tincidunt ornare massa eget egestas purus
    viverra. Magnis dis parturient montes nascetur ridiculus mus mauris.
  </Scrollbox>
);
