import { Project, ProjectCard } from '@/entities/Project';
import { createThemeStyles } from '@/shared/lib';
import { createMockArray } from '@/shared/lib/createMockArray';
import { STYLE_VARS } from '@/shared/styles';
import * as Crypto from 'expo-crypto';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

const mockProjects = createMockArray<Project>(5, (step) => ({
  id: 'prject-' + Crypto.randomUUID(),
  title: 'Project ' + step,
  description: `<p>D ${step}</p>`,
  createdAt: new Date().toISOString(),
  columnsIds: ['column-1-' + step, 'column-2-' + step, 'column-3-' + step],
  notesIds: ['note-1-' + step, 'note-2-' + step, 'note-3-' + step],
}));
const ProjectList = () => {
  const [projects, setProjects] = useState(mockProjects);

  return (
    <View>
      <FlatList
        data={projects}
        keyExtractor={(el) => el.title}
        renderItem={({ item }) => <ProjectCard {...item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.column}
      />
    </View>
  );
};
export default ProjectList;

const styles = createThemeStyles({
  listContainer: {
    padding: STYLE_VARS.spacing.default,
    gap: STYLE_VARS.spacing.default,
  },
  column: {
    gap: STYLE_VARS.spacing.default,
  },
});
