import { NOTE_TAGS } from '@/types/note';
import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';

function NotesSidebar() {
  return <SidebarNotes tags={NOTE_TAGS} />;
}

export default NotesSidebar;
