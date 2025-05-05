import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.figma.com">Figma</Link> is my primary tool for
                    UI design these days. Made the switch from Sketch in 2020 and haven’t
                    looked back.
                  </ListItem>

                  <ListItem>
                    I also use <Link href="https://code.visualstudio.com/">Visual Studio Code</Link> when working on UI components directly with code — perfect for tweaking layout, styles, or building design systems.
                  </ListItem>

                  <ListItem>
                    For any 3D models and video editing I use{' '}
                    <Link href="https://www.blender.org/">Blender</Link>. Since 2.8 it’s
                    become way simpler to use and in a lot of ways better than expensive
                    paid tools like 3DS Max or Maya.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>

          
  <ProjectSectionContent>
    <ProjectTextRow width="m">
      <ProjectSectionHeading>Game Development</ProjectSectionHeading>
      <ProjectSectionText as="div">
        <List>
          <ListItem>
            I primarily use <Link href="https://unity.com/">Unity</Link> for game development. It’s an incredibly versatile engine that supports both 2D and 3D games, and I’ve been using it extensively for various projects.
          </ListItem>
          <ListItem>
            For creating 3D assets, I rely on <Link href="https://www.blender.org/">Blender</Link>. It’s a powerful open-source tool that allows me to design models and animations for my games without relying on expensive software.
          </ListItem>
          <ListItem>
            For coding and scripting, I use <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>. Its support for various languages and extensive plugin ecosystem makes it the ideal choice for game development.
          </ListItem>
          <ListItem>
            For game scripting and coding, I use <Link href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</Link>, the primary programming language for Unity.
          </ListItem>
          <ListItem>
            For asset management and version control, I use <Link href="https://git-scm.com/">Git</Link> alongside <Link href="https://github.com/">GitHub</Link> to manage and collaborate on game projects.
          </ListItem>
          <ListItem>
          For testing and fixing bugs, I mostly just use the built-in console and <Link href="https://docs.unity3d.com/Manual/Profiler.html">Unity Profiler</Link>. It's simple but gets the job done when I need to track performance or figure out what's going wrong.
          </ListItem>

        </List>
      </ProjectSectionText>
    </ProjectTextRow>
  </ProjectSectionContent>
</ProjectSection>


        {/* Jangan dulu di ubah Chatgpt untuk bagian yang bawah ini */}

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>NYK Nemesis HELENS MKN-06</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Dell Optical Mouse - MS116</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>ASUS Vivobook 16</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>dbE GM210 7.1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
